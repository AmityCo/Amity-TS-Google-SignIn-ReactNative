import React, {createContext} from 'react';
import {API_REGIONS, createClient, enableCache} from '@amityco/ts-sdk';

const apiKey = 'apiKey';
const client = createClient(apiKey, API_REGIONS.SG);
enableCache();

export const ClientContext = createContext(client);
