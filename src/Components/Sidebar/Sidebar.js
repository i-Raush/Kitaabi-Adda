import React, { useRef } from "react";
import './Sidebar.css'
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context";

function Sidebar() {
  const {
  dispatchProductFilterOptions
  } = useProductAvailable()

  const {
    fictionCategoryCheckbox,
    setFictionCategoryCheckbox,
    thrillerCategoryCheckbox, 
    setThrillerCategoryCheckbox,
    techCategoryCheckbox, 
    setTechCategoryCheckbox,
    philosophyCategoryCheckbox, 
    setPhilosophyCategoryCheckbox,
    romanceCategoryCheckbox, 
    setRomanceCategoryCheckbox,
    mangaCategoryCheckbox, 
    setMangaCategoryCheckbox, 
  } = useGenre()

  const ratingRadioBtnRef = useRef(null)

  return (
    <aside className="product-page-sidebar">
      {/* <div className="filter-clear-options">
        <p className="sidebar-filter-option">Filters</p>
      </div> */}

      <div className="product-category">
        <p>Category</p>
        <div className="checkbox-item">
          <input
            onChange={() =>{ setFictionCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_FICTION_FILTER"}) }}
            id="fiction-checkbox"
            type="checkbox"
            checked={fictionCategoryCheckbox}
          />
          <label htmlFor="fiction-checkbox">Fiction</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setThrillerCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_THRILLER_FILTER"}) } }
            id="thriller-checkbox"
            type="checkbox"
            checked={thrillerCategoryCheckbox}
          />
          <label htmlFor="thriller-checkbox">Thriller</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setTechCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_TECH_FILTER"}) } }
            id="tech-checkbox"
            type="checkbox"
            checked={techCategoryCheckbox}
          />
          <label htmlFor="tech-checkbox">Tech</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setPhilosophyCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_PHILOSOPHY_FILTER"}) }}
            id="philosophy-checkbox"
            type="checkbox"
            checked={philosophyCategoryCheckbox}
          />
          <label htmlFor="philosophy-checkbox">Philosophy</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
            id="romance-checkbox"
            type="checkbox"
            checked={romanceCategoryCheckbox}
          />
          <label htmlFor="romance-checkbox">Romance</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setMangaCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_MANGA_FILTER"}) } }
            id="manga-checkbox"
            type="checkbox"
            checked={mangaCategoryCheckbox}
          />
          <label htmlFor="manga-checkbox">Manga</label>
        </div>
      </div>

      <div className="product-page-rating-radio">
        <p>Rating</p>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 4})   }
            type="radio"
            id="4-stars-or-above"
            name="rating"
            value="4-stars-or-above"
          />
          <label htmlFor="4-stars-or-above">4 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 3})   }
            type="radio"
            id="3-stars-or-above"
            name="rating"
            value="3-stars-or-above"
          />
          <label htmlFor="3-stars-or-above">3 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 2})   }
            type="radio"
            id="2-stars-or-above"
            name="rating"
            value="2-stars-or-above"
          />
          <label htmlFor="2-stars-or-above">2 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 1})   }
            type="radio"
            id="1-stars-or-above"
            name="rating"
            value="1-stars-or-above"
            defaultChecked
            ref={ratingRadioBtnRef}
          />
          <label htmlFor="1-stars-or-above">1 stars or above</label>
        </div>
      </div>
    </aside>
  );
}

export { Sidebar };
