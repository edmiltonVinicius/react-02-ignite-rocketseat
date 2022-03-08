import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    models: {
        transactions: Model
    },

    routes() {
        this.namespace = 'fake-api';

        this.get('/transactions', (schema, request) => {
            return schema.all('transactions');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transactions', { ...data, id: Math.random() });
        });
    }
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
