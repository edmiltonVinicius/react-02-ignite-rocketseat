import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    models: {
        transaction: Model
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Frelancer website",
                    type: "deposit",
                    category: "Dev",
                    value: 1234,
                    createdAt: new Date()
                },
            ]
        })
    },

    routes() {
        this.namespace = 'fake-api';

        this.get('/transactions', (schema, request) => {
            return schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', { ...data, id: Math.random() });
        });
    }
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
