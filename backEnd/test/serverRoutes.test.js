
const { expect } = require('chai');
const request = require('supertest')
const sinon = require('sinon')

const controllers = require("../src/controllers")
const routes = require("../src/router/routes")
process.env.NODE_ENV = 'test'
const server = require("../server")
const result = require("../src/data").data
const { token } = require("../src/data/mySecretData")

describe("getTime", () => {
    it('getTime route with correct token should return timeData object', () => {
        request(server)
            .get('/time')
            .set({ Authorization: token })
            .expect(200)
            .end((err,res) => {
                if (err) throw err
                expect(res.body).to.be.an('object')
                expect(res.body.timeData).to.eql(result.timeData)
            })
    })
    it('getTime route with no authorization should return error and 403 status', () => {
        request(server)
            .get('/time')
            .expect(403)
            .end((err,res) => {
                expect(res.body.error.message).to.eql("UnAuthorized user")
            })
    })
})
