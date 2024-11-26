import logger from "app/app.logger";
import env from "app/app.env";

export function main() {
  logger.info("Starting app...");
  logger.info(`Environment: ${env.apiKey}`);
}

main();
