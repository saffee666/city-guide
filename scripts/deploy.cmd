@echo off
REM 一键部署：构建 + 推 gh-pages 分支
REM 用法：双击运行，或在仓库根目录执行 deploy.cmd

setlocal
cd /d "%~dp0"

echo [1/3] 构建站点...
cd site
call npm run build || (echo 构建失败 & exit /b 1)
cd ..

echo [2/3] 更新 gh-pages 分支...
set TMPD=%TEMP%\ghp-deploy
if exist "%TMPD%" rmdir /s /q "%TMPD%"
git worktree add --detach "%TMPD%" 2>nul
cd "%TMPD%"
git checkout --orphan gh-pages-tmp 2>nul || git checkout gh-pages-tmp
for /f "delims=" %%i in ('dir /b') do @if not "%%i"==".git" del /f /s /q "%%i" >nul 2>&1
xcopy "%~dp0site\dist\*" . /e /i /y >nul
git add -A
git commit -m "deploy: build %date% %time%"
git fetch origin main:refs/remotes/origin/main 2>nul
git push -q origin gh-pages-tmp:gh-pages || (echo 推送失败，网络重试一次 & git push -q origin gh-pages-tmp:gh-pages)
cd "%~dp0"
git worktree remove --force "%TMPD%" 2>nul
git branch -D gh-pages-tmp 2>nul

echo [3/3] 完成。线上地址：https://saffee666.github.io/city-guide/
endlocal
