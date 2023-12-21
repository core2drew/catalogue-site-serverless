import { Request, Response } from "express";

async function sendEnquiry(req: Request, res: Response) {
  try {
    res.status(200).json({
      message:
        "Thank you, we received your enquiry, we will contact you as soon as possible.",
    });
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}
export default sendEnquiry;
