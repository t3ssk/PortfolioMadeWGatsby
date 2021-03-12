import React from 'react'
import { Link } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import * as styles from './Pagination.module.scss'

export const Pagination = (props) => {
    return (
      <ul className={styles.Pagination}>
        {props.currentPage > 1 && (
          <li className={styles.Arrows}>
            <Link
              to={
                props.currentPage - 1 === 1
                  ? "/blog"
                  : `/blog/${props.currentPage - 1}`
              }
            >
              <FaAngleLeft />
            </Link>
          </li>
        )}
        {Array.from({ length: props.numOfPages }).map((page, index) => {
          return (
            <li key={index} className={styles.PageNums}>
              {index + 1 === props.currentPage ? (
                <span>{props.currentPage}</span>
              ) : (
                <Link
                  to={
                    index === 0
                      ? "/${props.page}"
                      : `/${props.page}/${index + 1}`
                  }
                >
                  {index + 1}
                </Link>
              )}
            </li>
          )
        })}
        {props.currentPage < props.numOfPages && (
          <li className={styles.Arrows}>
            <Link to={`/${props.page}/${props.currentPage + 1}`}>
              <FaAngleRight />
            </Link>
          </li>
        )}
      </ul>
    )
}
