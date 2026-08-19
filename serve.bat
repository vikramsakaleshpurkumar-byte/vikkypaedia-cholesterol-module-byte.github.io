@echo off
REM ===========================================================
REM  Cholesterol MOOC - local server launcher (Windows)
REM  Double-click this file. It uses whatever you have installed.
REM ===========================================================
setlocal enabledelayedexpansion
cd /d "%~dp0"
set PORT=8080

REM --- find this machine's LAN address so you can share it ---
set LANIP=
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
  for /f "tokens=* delims= " %%b in ("%%a") do set LANIP=%%b
)

echo.
echo   Cholesterol: From Molecule to Management
echo   ----------------------------------------
echo   On this computer:      http://localhost:%PORT%
if defined LANIP echo   On your Wi-Fi / LAN:   http://!LANIP!:%PORT%
echo   Self-test page:        http://localhost:%PORT%/check.html
echo.
echo   Press Ctrl+C to stop the server.
echo.

where python >nul 2>nul
if %errorlevel%==0 goto :usepython

where py >nul 2>nul
if %errorlevel%==0 goto :usepy

where npx >nul 2>nul
if %errorlevel%==0 goto :usenpx

where php >nul 2>nul
if %errorlevel%==0 goto :usephp

goto :none

:usepython
python -m http.server %PORT%
goto :end

:usepy
py -m http.server %PORT%
goto :end

:usenpx
npx --yes serve -l %PORT% .
goto :end

:usephp
php -S 0.0.0.0:%PORT%
goto :end

:none
echo   [!] No web server found on this machine.
echo.
echo   Install ONE of these, then run this file again:
echo     - Python:  https://www.python.org/downloads/   (tick "Add Python to PATH")
echo     - Node.js: https://nodejs.org/
echo.
echo   Or just double-click index.html - the course works fine from the
echo   file system, it simply cannot be shared over the network that way.
echo.
pause

:end
endlocal
