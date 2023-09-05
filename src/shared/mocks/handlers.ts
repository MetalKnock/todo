import { rest } from 'msw';
import { API_URL, ApiPath } from '../constants/api';
import { USER_ID } from '../constants/todo';
import { MOCK_TODOS } from './data';

export const handlers = [
  rest.get(`${API_URL}${ApiPath.USERS}/${USER_ID}${ApiPath.TODOS}`, (_, res, ctx) => {
    return res(ctx.json(MOCK_TODOS));
  }),
];
