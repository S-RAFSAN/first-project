import { Schema, model, connect } from 'mongoose';

import validator from 'validator';
 
import { Product } from './Products/product.interface';
 
const productSchema = new Schema<Product>({

	title: {

		type: String,

		required: [true, 'Title is required'],

		unique: true,

		trim: true,

		validate: {

			validator: (value: string) => validator.isAlpha(value),

			message: '{VALUE} is not valid',

		},

	},

	author: {

		type: String,

		required: [true, 'Author is required'],

		trim: true,

		validate: {

			validator: (value: string) => validator.isAlpha(value),

			message: '{VALUE} is not valid',

		},

	},

	price: {

		type: Number,

		required: [true, 'Price is required'],

		min: [0, 'Price must be a positive number'],

	},

	category: {

		type: String,

		required: [true, 'Category is required'],

		enum: {

			values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],

			message: '{VALUE} is not a valid category',

		},

	},

	description: {

		type: String,

		required: [true, 'Description is required'],

		trim: true,

	},

	quantity: {

		type: Number,

		required: [true, 'Quantity is required'],

		min: [0, 'Quantity must be a positive number'],

		validate: {

			validator: (value: number) => validator.isNumeric(value.toString()),

			message: 'Quantity must be a valid number',

		},

	},

	inStock: {

		type: Boolean,

		required: [true, 'InStock is required'],

		validate: {

			validator: (value: boolean) => typeof value === 'boolean',

			message: 'InStock must be a boolean value',

		},

	},

});

export const ProductModel = model<Product>('Product', productSchema); 
 