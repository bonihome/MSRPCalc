#!/bin/bash
# Auto-start script for MSRPCalc

cd /workspaces/MSRPCalc

# Check if server is already running on port 3000
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "Server is already running on port 3000"
else
    echo "Starting MSRPCalc server on port 3000..."
    nohup python3 -m http.server 3000 > /tmp/msrpcalc-server.log 2>&1 &
    echo "Server started! Access at http://localhost:3000"
fi
