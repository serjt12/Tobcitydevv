import Travel from '../models/travel';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all travels
 * @param req
 * @param res
 * @returns void
 */
export function getTravels(req, res) {
  Travel.find().sort('-dateAdded').exec((err, travels) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ travels });
  });
}

/**
 * Save a travel
 * @param req
 * @param res
 * @returns void
 */
export function addTravel(req, res) {
  if (!req.body.travel.from || !req.body.travel.to || !req.body.travel.content) {
    res.status(403).end();
  }

  const newTravel = new Travel(req.body.travel);

  // Let's sanitize inputs
  newTravel.from = sanitizeHtml(newTravel.from);
  newTravel.to = sanitizeHtml(newTravel.to);
  newTravel.date = sanitizeHtml(newTravel.date);
  newTravel.plate = sanitizeHtml(newTravel.plate);
  newTravel.price = sanitizeHtml(newTravel.price);
  newTravel.model = sanitizeHtml(newTravel.model);
  newTravel.content = sanitizeHtml(newTravel.content);

  newTravel.cuid = cuid();
  newTravel.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ travel: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getTravel(req, res) {
  Travel.findOne({ cuid: req.params.cuid }).exec((err, travel) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ travel });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteTravel(req, res) {
  Travel.findOne({ cuid: req.params.cuid }).exec((err, travel) => {
    if (err) {
      res.status(500).send(err);
    }

    travel.remove(() => {
      res.status(200).end();
    });
  });
}
