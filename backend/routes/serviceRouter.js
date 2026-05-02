import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

import {
  createService,
  deleteService,
  getServiceById,
  getServices,
  updateService
} from '../controllers/serviceController.js';

// ✅ create uploads folder if not exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// ✅ proper storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');   // ✅ local folder (not /tem)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById);

serviceRouter.post('/', upload.single("image"), createService);
serviceRouter.put("/:id", upload.single("image"), updateService);

serviceRouter.delete("/:id", deleteService);

export default serviceRouter;


















// import express from 'express';
// import multer from 'multer';


// import { createService,deleteService,getServiceById,getServices, updateService } from '../controllers/serviceController.js';

// const upload = multer({dest:"/tem"});
// const serviceRouter = express.Router();

// serviceRouter.get("/",getServices);
// serviceRouter.get("/:id",getServiceById);

// serviceRouter.post('/',upload.single("image"), createService);
// serviceRouter.put("/:id",upload.single("image"),updateService);

// serviceRouter.delete("/:id",deleteService);

// export default serviceRouter;
