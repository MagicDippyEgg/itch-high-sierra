process.setSourceMapsEnabled(true);

try {
  const dc = require("diagnostics_channel");
  if (dc && typeof dc.tracingChannel !== "function") {
    dc.tracingChannel = function () {
      return {
        subscribe() {},
        unsubscribe() {},
        tracePromise(fn: any) {
          return fn();
        },
        traceSync(fn: any) {
          return fn();
        },
        hasSubscribers: false,
      };
    };
  }
} catch (e) {
  // ignore
}

import env from "main/env";

env.setNodeEnv();

if (env.integrationTests) {
  require("main/boot/test-paths").setup();
}

require("main/crash-reporter").mount();

if (process.env.NODE_ENV !== "production") {
  Error.stackTraceLimit = 2000;
}

require("main/main").main();
