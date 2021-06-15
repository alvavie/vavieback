const db = require("../models");

const Client = db.client;
const Position = db.position;
const Contract = db.contract;
const Fund = db.fund;
const FundH = db.fundh;

const path = require('path');


exports.getClientInfo = (req, res) => {
    console.log('request client info');
    console.log(req.body.username);
    Client.find({username: req.body.username}, (err, response) => {
            if (err) {
                res.status(500).send({message: err});
                console.log('error on request to clients');
                return;
            }
            console.log(response);
            if (response.length) {
                res.send(response[0]);
            } else {
                res.status(200).send({message: 'No client found'});
                console.log('No Client found');
            }
        })
};



exports.getContracts = (req, res) => {
    console.log('request contracts list');
    Contract.find(
        {
            clientId: {$in: req.body.clientId}
        }, (err, contracts) => {
            if (err) {
                res.status(500).send({message: err});
                console.log('error on request to contracts');
                return;
            }
            if (contracts.length) {
                res.send(contracts);
            } else {
                res.status(200).send({message: 'No contracts found'});
                console.log('No contracts found');
            }
        })
};



exports.getPositions = (req, res) => {
    console.log('request positions info');
    Position.find(
        {
            contractId: {$in: req.body.contractId}
        }, (err, positions) => {
            if (err) {
                res.status(500).send({message: err});
                console.log('error on request to positions');
                return;
            }
            if (positions.length) {
                res.send(positions);
            } else {
                res.status(200).send({message: 'No position found'});
                console.log('No Position found');
            }
        })
};


exports.getFundInfo = (req, res) => {
    console.log('request fund info');
    Fund.find(
        {
            fundId: {$in: req.body.fundId}
        }, (err, fund) => {
            if (err) {
                res.status(500).send({message: err});
                console.log('error on request to fund info');
                return;
            }
            if (fund.length) {
                res.send(fund[0]);
            } else {
                res.status(200).send({message: 'No fund found'});
                console.log('No fund found');
            }
        })
};



exports.getFundPriceHist = (req, res) => {
    console.log('request fund price hist');
    FundH.find(
        {
            fundId: {$in: req.body.fundId}
        }, (err, fundh) => {
            if (err) {
                res.status(500).send({message: err});
                console.log('error on request to fund hist');
                return;
            }
            if (fundh.length) {
                res.send(fundh);
            } else {
                res.status(200).send({message: 'No fund hist found'});
                console.log('No fund hist found');
            }
        })
};



function getDirBase() {
    return path.join(__dirname, '..', '..');
}