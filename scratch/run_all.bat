@echo off
echo Running generator...
node scratch/generator.js
if %errorlevel% neq 0 (
    echo Generator failed
    exit /b %errorlevel%
)

echo Running compiler...
node scratch/compile_scenarios.js
if %errorlevel% neq 0 (
    echo Compiler failed
    exit /b %errorlevel%
)

echo Running harvester...
node scratch/harvest_dict.js
if %errorlevel% neq 0 (
    echo Harvester failed
    exit /b %errorlevel%
)

echo All scripts executed successfully!
