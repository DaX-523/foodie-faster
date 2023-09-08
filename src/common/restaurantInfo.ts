export interface RestaurantInfo {
  id: string;
  name: string;
  areaName: string;
  avgRating: number;
  costForTwoMessage: string;
  city: string;
  cuisines: string[];
  totalRatingsString: string;
  sla: { slaString: string };
}
