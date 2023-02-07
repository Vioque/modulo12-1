import { config } from 'dotenv';
import { history, routes } from './core/router';

config();

history.push(routes.login);
