
const { expect } = require('chai');
const request = require('supertest')
const sinon = require('sinon')

const controllers = require("../src/controllers")
const routes = require("../src/router/routes")
process.env.NODE_ENV = 'test'
const server = require('../server')
const result = require("../src/data").data

describe("getTime", () => {
    it('getTime route should return timeData object', () => {
        request(server)
            .get('/time')
            .expect(200)
            .end((err,res) => {
                if (err) throw err
                expect(res.body).to.be.an('object')
                expect(res.body.timeData).to.eql(result.timeData)
            })
    })
})
