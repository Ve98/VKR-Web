import { OfferModel } from "../../models"

export interface OfferState {
  //list
  offers: OfferModel[];
  offersIsLoading: boolean;

  //details
  currentOffer: OfferModel;
  currentOfferIsLoading: boolean;
}

export const initialState: OfferState = {
  //list
  offers: null,
  offersIsLoading: null,

  //details
  currentOffer: null,
  currentOfferIsLoading: null
}
