#!/bin/bash
# This assumes all of the OS-level configuration has been completed and git repo has already been cloned

echo "------------------------------------------------------------------------------"
echo "Unit Tests"
echo "------------------------------------------------------------------------------"

max_result=0

cd ../source/ServiceWorkbenchOnAWS
./scripts/install.sh
result=$?
if [ "$result" -gt "$max_result" ]; then
  max_result=$result
fi
printf "\n\n"

echo "Building packages"
./scripts/build-all-packages.sh
result=$?
if [ "$result" -gt "$max_result" ]; then
  max_result=$result
fi
printf "\n\n"

echo "Running unit tests"
./scripts/run-unit-tests.sh
result=$?
if [ "$result" -gt "$max_result" ]; then
  max_result=$result
fi

exit $max_result
cd ../../deployment