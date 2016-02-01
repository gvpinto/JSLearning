'use strict';

var _ = require('lodash');

var StaticConstants =  {
    Business: {
        InstrumentType: {
            Account: 'A',         // Account
            Security: 'S'          // Security
        },
        Instance: {
            default: "100"
        }
    },
    System: {
        env: {
            Sandbox: 'sandbox',
            Development: 'development',
            Test: 'test',
            QA: 'qa',
            Production: 'production',
            DR: 'dr',
            Training: 'training'
        }
    }
};

var RuntimeConstants = {
    Runtime: {
        env: {
            isSandBox: (process.env.NODE_ENV === StaticConstants.System.env.Sandbox),
            isDevelopment: (process.env.NODE_ENV === StaticConstants.System.env.Development),
            isTest: (process.env.NODE_ENV === StaticConstants.System.env.Test),
            isQA: (process.env.NODE_ENV === StaticConstants.System.env.QA),
            isProduction: (process.env.NODE_ENV === StaticConstants.System.env.Production),
            isDR: (process.env.NODE_ENV === StaticConstants.System.env.DR),
            isTraining: (process.env.NODE_ENV === StaticConstants.System.env.Training)

        }
    }
}

module.exports = _.extend(StaticConstants, RuntimeConstants);
