@echo off
rem Rebuilds the blog index (blog/posts.js) from the post files in blog/posts/
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py tools\update_blog.py
) else (
  where python >nul 2>nul
  if %errorlevel%==0 (
    python tools\update_blog.py
  ) else (
    echo Python is not installed on this computer.
    echo Install it from https://www.python.org/downloads/ ^(tick "Add python.exe to PATH"^),
    echo then double-click this file again.
  )
)
echo.
pause
