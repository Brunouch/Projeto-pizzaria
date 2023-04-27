import {Router} from 'express';
import multer from 'multer';
import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { DeleteItemController } from './controllers/order/DeleteItemController';

import {IsAuthenticated} from './middlewares/IsAuthenticated';

import uploudConfig from './config/multer'
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetaiOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


const router = Router();
const uploud = multer(uploudConfig.uploud("./tmp"));

//-----Rotas User-----//
router.post('/users', new CreateUserController().handle) 
router.post('/session', new AuthUserController().handle)
router.get('/me', IsAuthenticated, new DetailUserController().handle)

//-----Rotas Category-----// 
router.post('/category', IsAuthenticated, new CreateCategoryController().handle)
router.get('/category', IsAuthenticated, new ListCategoryController().handle)

//-----Rotas Product-----//
router.post('/product', IsAuthenticated, uploud.single('file') , new  CreateProductController().handle)
router.get('/category/product', IsAuthenticated, new ListByCategoryController().handle)

//-----Rotas Order-----//
router.post('/order', IsAuthenticated, new CreateOrderController().handle)
router.delete('/order', IsAuthenticated, new DeleteOrderController().handle)
router.post('/order/add', IsAuthenticated, new AddItemController().handle)
router.delete('/order/delete', IsAuthenticated, new DeleteItemController().handle)
router.put('/order/send', IsAuthenticated, new SendOrderController().handle)
router.get('/orders', IsAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', IsAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', IsAuthenticated, new FinishOrderController().handle)

 
export {router};