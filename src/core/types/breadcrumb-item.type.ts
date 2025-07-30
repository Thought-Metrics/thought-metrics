import type { ROUTES } from '@/routes/routeConfig';

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
