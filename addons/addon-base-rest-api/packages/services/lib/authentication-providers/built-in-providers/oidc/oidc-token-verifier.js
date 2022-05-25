/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

async function getOidcTokenVerifier(jwksUri) {
  const keyClient = jwksClient({
    cache: true,
    cacheMaxAge: 86400000,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    strictSsl: true,
    jwksUri,
  });

  const verificationOptions = {
    algorithms: 'RS256',
  };

  // eslint-disable-next-line
  function getSigningKey(header = decoded.header, callback) {
    keyClient.getSigningKey(header.kid, function(err, key) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  const verify = async token => {
    // First attempt to decode token before attempting to verify the signature
    const promise = new Promise(function(resolve) {
      jwt.verify(token, getSigningKey, verificationOptions, function(error, decoded) {
        if (error) {
          resolve(error);
        } else {
          resolve(decoded);
        }
      });
    });
    let decodedOutput;
    await promise.then(function(data) {
      decodedOutput = data;
    });
    return decodedOutput;
  };

  return { verify };
}

module.exports = { getOidcTokenVerifier };
