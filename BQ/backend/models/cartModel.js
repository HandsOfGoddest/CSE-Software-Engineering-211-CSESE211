import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
        },
        name: { type: String,  },
        image: { type: String,  },
        price: { type: Number,  },
        countInStock:{ type: Number, },
        qty: { type: Number, },
        brandName: {type: String},
      }
    ],
    // orderItems: [
    //   {
    //     name: { type: String,  },
    //     qty: { type: Number,  },
    //     image: { type: String,  },
    //     price: { type: Number,  },
    //     product: { 
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product'
    //      },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart