
export class logger {
    static log(message: string) {
      console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
  
    static error(message: string) {
      console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
  
    static warn(message: string) {
      console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }
  
    static info(message: string) {
      console.info(`[INFO] ${new Date().toISOString()}: ${message}`);
    }
  }
  