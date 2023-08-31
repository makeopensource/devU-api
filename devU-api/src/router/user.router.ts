import express from 'express'

import validator from '../middleware/validator/user.validator'
import { asInt } from '../middleware/validator/generic.validator'

import UserController from '../controller/user.controller'

const Router = express.Router()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 */
Router.get('/', UserController.get)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single user
 */
Router.get('/:id', asInt(), UserController.detail)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 */
Router.post('/', validator, UserController.post)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 */
Router.put('/:id', asInt(), validator, UserController.put)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 */
Router.delete('/:id', asInt(), UserController._delete)

export default Router
