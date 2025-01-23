# Unexpected Node.js Server Crash

This repository demonstrates a scenario where a Node.js HTTP server crashes unexpectedly without providing clear error messages.  The issue highlights the importance of robust error handling and logging in Node.js applications.

## Bug Report

A simple HTTP server is created using the `http` module.  Under normal circumstances, it should run indefinitely. However, after a short time, it unexpectedly exits without any indication in the console log.  This silent failure makes debugging difficult.

## Solution

The solution involves implementing a comprehensive error handling mechanism using `process.on('uncaughtException')` to catch unexpected errors.  This allows for logging the error details, preventing the server from crashing silently, and potentially providing valuable information for troubleshooting.