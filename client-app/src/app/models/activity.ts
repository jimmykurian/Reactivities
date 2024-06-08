/**
 * @author Jimmy Kurian
 * @name Activity
 */

/**
 * The Activity interface represents the structure of an activity object in the Reactivities application.
 * It includes various properties such as id, title, date, description, category, city, and venue.
 *
 * @interface
 *
 * @property {string} id - The unique identifier for the activity.
 * @property {string} title - The title of the activity.
 * @property {string} date - The date of the activity in ISO string format.
 * @property {string} description - A brief description of the activity.
 * @property {string} category - The category to which the activity belongs.
 * @property {string} city - The city where the activity takes place.
 * @property {string} venue - The specific venue of the activity within the city.
 */
export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}
