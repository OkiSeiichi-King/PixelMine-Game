/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FarmContract extends Truffle.Contract<FarmInstance> {
  "new"(
    _token: string,
    meta?: Truffle.TransactionDetails
  ): Promise<FarmInstance>;
}

export interface FarmCreated {
  name: "FarmCreated";
  args: {
    _address: string;
    0: string;
  };
}

export interface FarmSynced {
  name: "FarmSynced";
  args: {
    _address: string;
    0: string;
  };
}

type AllEvents = FarmCreated | FarmSynced;

export interface FarmInstance extends Truffle.ContractInstance {
  createFarm: {
    (_charity: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _charity: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _charity: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _charity: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLand(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ fruit: BN; createdAt: BN }[]>;

  sync: {
    (
      _events: {
        action: number | BN | string;
        fruit: number | BN | string;
        landIndex: number | BN | string;
        createdAt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _events: {
        action: number | BN | string;
        fruit: number | BN | string;
        landIndex: number | BN | string;
        createdAt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ land: { fruit: BN; createdAt: BN }[]; balance: BN }>;
    sendTransaction(
      _events: {
        action: number | BN | string;
        fruit: number | BN | string;
        landIndex: number | BN | string;
        createdAt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _events: {
        action: number | BN | string;
        fruit: number | BN | string;
        landIndex: number | BN | string;
        createdAt: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  levelUp: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  getMarketPrice(
    price: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    createFarm: {
      (_charity: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _charity: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _charity: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _charity: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLand(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ fruit: BN; createdAt: BN }[]>;

    sync: {
      (
        _events: {
          action: number | BN | string;
          fruit: number | BN | string;
          landIndex: number | BN | string;
          createdAt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _events: {
          action: number | BN | string;
          fruit: number | BN | string;
          landIndex: number | BN | string;
          createdAt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ land: { fruit: BN; createdAt: BN }[]; balance: BN }>;
      sendTransaction(
        _events: {
          action: number | BN | string;
          fruit: number | BN | string;
          landIndex: number | BN | string;
          createdAt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _events: {
          action: number | BN | string;
          fruit: number | BN | string;
          landIndex: number | BN | string;
          createdAt: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    levelUp: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    getMarketPrice(
      price: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions
  ): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}