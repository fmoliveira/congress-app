import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../index"
import nextIcon from "./next.svg"
import previousIcon from "./previous.svg"

const DEFAULT_ROWS_PER_PAGE = 30

const NavigationWrapper = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  align-items: center;
  text-align: center;
  font-size: 0.8em;
  color: #555555;
`

const NavigationIcon = styled.img`
  width: 16px;
  height: 16px;
`

interface IProps {
  children: (child: any) => React.ReactNode
  data: any[]
  onPageChanged?: () => void
}

export const Paginator = ({ children, data, onPageChanged }: IProps) => {
  const itemsPerPage = DEFAULT_ROWS_PER_PAGE
  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const [currentPage, setPage] = useState(1)
  const changeToPage = (page: number) => {
    setPage(page)
    if (onPageChanged) {
      onPageChanged()
    }
  }

  const beginIndex = (currentPage - 1) * itemsPerPage
  const endIndex = beginIndex + itemsPerPage
  const displayedItems = data.slice(beginIndex, endIndex)
  const displayedLength = displayedItems.length

  const hasPrevious = currentPage > 1
  const goToPrevious = hasPrevious
    ? () => changeToPage(currentPage - 1)
    : undefined

  const hasNext = currentPage < totalPages
  const goToNext = hasNext ? () => changeToPage(currentPage + 1) : undefined

  return (
    <div>
      {displayedItems.map(children)}
      <NavigationWrapper>
        <div>
          {hasPrevious && (
            <Button onClick={goToPrevious}>
              <NavigationIcon src={previousIcon} alt="Previous page" />
            </Button>
          )}
        </div>
        <div>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <p>
            Displaying {displayedLength} members of {totalItems}
          </p>
        </div>
        <div>
          {hasNext && (
            <Button onClick={goToNext}>
              <NavigationIcon src={nextIcon} alt="Next page" />
            </Button>
          )}
        </div>
      </NavigationWrapper>
    </div>
  )
}
