/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
define("jest.config", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,
    // Stop running tests after `n` failures
    // bail: 0,
    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\Jbt\\AppData\\Local\\Temp\\jest",
    // Automatically clear mock calls, instances and results before every test
    // clearMocks: false,
    // Indicates whether the coverage information should be collected while executing the test
    // collectCoverage: false,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
    // The directory where Jest should output its coverage files
    // coverageDirectory: undefined,
    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],
    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,
    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,
    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,
    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],
    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,
    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,
    // A set of global variables that need to be available in all test environments
    // globals: {},
    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",
    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],
    // An array of file extensions your modules use
    // moduleFileExtensions: [
    //   "js",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},
    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],
    // Activates notifications for test results
    // notify: false,
    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",
    // A preset that is used as a base for Jest's configuration
    // preset: undefined,
    // Run tests from one or more projects
    // projects: undefined,
    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,
    // Automatically reset mock state before every test
    // resetMocks: false,
    // Reset the module registry before running each individual test
    // resetModules: false,
    // A path to a custom resolver
    // resolver: undefined,
    // Automatically restore mock state and implementation before every test
    // restoreMocks: false,
    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,
    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],
    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",
    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    // setupFilesAfterEnv: [],
    // The number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],
    // The test environment that will be used for testing
    // testEnvironment: "jest-environment-node",
    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},
    // Adds a location field to test results
    // testLocationInResults: false,
    // The glob patterns Jest uses to detect test files
    // testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
    // ],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],
    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],
    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,
    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",
    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",
    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",
    // A map from regular expressions to paths to transformers
    // transform: undefined,
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],
    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,
    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,
    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],
    // Whether to use watchman for file crawling
    // watchman: true,
    };
});
define("src/iperson", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/consumer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Consumer = void 0;
    class Consumer {
        constructor(isClubMember) {
            this.isClubMember = isClubMember;
        }
    }
    exports.Consumer = Consumer;
});
define("src/product", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Product = void 0;
    class Product {
        constructor(price, productName, comp, desc) {
            this.price = price;
            this.productName = productName;
            this.brand = comp;
            this.barcode = desc;
        }
    }
    exports.Product = Product;
});
define("src/staff-member", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StaffMember = void 0;
    class StaffMember {
        constructor(job) {
            this.job = job;
        }
    }
    exports.StaffMember = StaffMember;
});
define("src/cash-register", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CashRegister = void 0;
    class CashRegister {
        constructor(worker) {
            this.cashId = CashRegister.cashIdCounter++;
            this.worker = worker;
        }
        startNewPurchase() {
            if (!this.products) {
                this.products = [];
                return;
            }
            else
                throw Error('ERROR!!! In the middle of another bill');
        }
        endPurchase(a) {
            if (a.isClubMember === true) {
                let total = this.products.reduce((prev, curr) => {
                    return prev + curr.price;
                }, 0);
                this.products = null;
                return total;
            }
        }
        addProduct(product) {
            this.products.push(product);
        }
        changeWorker(worker) {
            return worker;
        }
    }
    exports.CashRegister = CashRegister;
    CashRegister.cashIdCounter = 1;
});
define("src/main", ["require", "exports", "src/cash-register", "src/consumer", "src/product", "src/staff-member"], function (require, exports, cash_Register_1, consumer_1, product_1, staff_Member_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const products = [
        new product_1.Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
        new product_1.Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
    ];
    const cashiers = [
        new staff_Member_1.StaffMember('Cashier'),
        new staff_Member_1.StaffMember('Cashier')
    ];
    const stands = [
        new cash_Register_1.CashRegister(cashiers[0]),
        new cash_Register_1.CashRegister(cashiers[1])
    ];
    stands[0].changeWorker(cashiers[1]);
    stands[1].changeWorker(cashiers[0]);
    stands[0].startNewPurchase();
    stands[0].addProduct(products[1]);
    stands[0].addProduct(products[1]);
    stands[0].addProduct(products[0]);
    stands[0].startNewPurchase(); // ERROR!!! In the middle of another bill
    const consumer = new consumer_1.Consumer(true);
    const bill = stands[0].endPurchase(consumer);
    console.log(bill); //114
});
define("tests/main.test", ["require", "exports", "../Cash-Register", "../Product", "../Staff-Member"], function (require, exports, Cash_Register_1, Product_1, Staff_Member_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const products = [
        new Product_1.Product(100, "jagermeister", "Mast-Jägermeister AG", "asdr42fac3qfersfv43"),
        new Product_1.Product(7, "Bread", "Angel", "sdfsdf34frv34"),
    ];
    const cashiers = [
        new Staff_Member_1.StaffMember("Cashier"),
        new Staff_Member_1.StaffMember("Cashier"),
    ];
    const stands = [
        new Cash_Register_1.CashRegister(cashiers[0]),
        new Cash_Register_1.CashRegister(cashiers[1]),
    ];
    test("CashRegister functions test", () => {
        stands[0].startNewPurchase();
        expect(() => stands[0].startNewPurchase()).toThrow("ERROR!!! In the middle of another bill");
    });
});
/*
stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);

stands[0].startNewPurchase();

stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);


const consumer = new Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill) //114


*/
