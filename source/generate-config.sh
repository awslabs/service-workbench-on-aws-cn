#!/bin/bash -x
echo $STAGE_NAME
echo $REGION_NAME
echo "awsRegion: $REGION_NAME" >> ./main/config/settings/${STAGE_NAME}.yml 
echo $SOLUTION_NAME
echo "solutionName: $SOLUTION_NAME" >> ./main/config/settings/${STAGE_NAME}.yml
echo $ENVIRONMENT_TYPE
echo "envType: $ENVIRONMENT_TYPE" >> ./main/config/settings/${STAGE_NAME}.yml
echo $SERVICE_CATALOG_PORTFOLIO
echo "createServiceCatalogPortfolio: $SERVICE_CATALOG_PORTFOLIO" >> ./main/config/settings/${STAGE_NAME}.yml
