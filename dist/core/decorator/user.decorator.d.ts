import { UserRole } from '../types/user.types';
export declare function Auth(...roles: UserRole[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
