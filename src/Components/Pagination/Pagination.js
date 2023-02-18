import React, { memo, useState } from "react";
import "./Pagination.css";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function Pagination({ data }) {
  const [pageNUmber, setPageNumber] = useState(0);
  const usersPerPage = `12`;
  const pagesVisited = pageNUmber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="HomeAds">
        <div className="HomeAds-container">
          {data
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item, i) => {
              const images = JSON.parse(item.images || "[]")[0];
              return (
                <div
                  className="HomeAds-card"
                  key={i}
                  onClick={() => navigate(`/product_view/${item.id}`)}
                >
                  <figure className="HomeAds-figure">
                    <img src={images} alt="" />
                  </figure>
                  <p>{item.name ? item.name : "Product"}</p>
                  <p className="HomeAds-card-last">{item.price} sum</p>
                </div>
              );
            })}
        </div>

        <ReactPaginate
          previousLabel={<ChevronLeft />}
          nextLabel={<ChevronRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination_btns"}
          previousLinkClassName={"previuos_btn"}
          nextLinkClassName={"next_btn"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
        />
      </div>
    </>
  );
}

export default memo(Pagination);
