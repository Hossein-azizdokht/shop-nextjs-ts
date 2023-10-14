import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

import { Brands } from '../../_mock/filters';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FiFilter } from 'react-icons/fi';
import { TProductList } from './type';
import { useRouter } from 'next/router';
import { StoreItem } from '../../components/store/storItem';
import { StoreFilterLoding, StoreItemLoding } from '../../components/store/storeLodings';
import { Filter } from '../../components/store/filter/filter';
// import Breadcrumbs from '@/components/breadcrumb';



export async function getServerSideProps(context: any) {
  const res = await fetch('https://fakestoreapi.com/products?limit=9');
  const data = await res.json();
  return {
    props: {
      productsList: data
    }
  };



}
const Store = ({ productsList }: any) => {
  const router = useRouter();
  console.log(productsList);

  //states----------------
  const [data, setData] = useState([])//store data state
  const [isLoading, setIsLoading] = useState(false)//store data state
  const [items, setItems] = useState(Array.from({ length: 20 }))//store data state
  const [pagenumber, setpagenumber] = useState(0);


  useEffect(() => {
    setData(productsList);
  }, [productsList])


  async function fetchMoreData() {
    // router.push(`/news?page=${pagenumber + 1}`);
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(async () => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=9`);
      const dataLoad = await response.json();
      console.log(dataLoad);
      setData(data.concat(dataLoad));
      setIsLoading(false)
    }, 2000);

  };




  return (
    <Container>
      <Row>
        <Col>
          <div className='breadcrumb'>
            {/* <Breadcrumbs /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={6}>
          <Card className='p-4 position-sticky top-0'>
            <h5>Filters</h5>
            <hr />
            {!isLoading ? (
              <Filter data={Brands} />
            ) : (
              <StoreItemLoding />
            )}
          </Card>
        </Col>
        <Col lg={9} md={8} sm={6}>
          <div className='d-flex'>
            <FiFilter size='1rem' className='m-1 opacity-50' />
            <div className='d-flex'>
              <div className='small-label bold me-3'>Order by: </div>
              <div className='small-label bold me-3'>Popular </div>
              <div className='small-label bold me-3'>Price </div>
              <div className='small-label bold me-3'>Stock </div>
            </div>
          </div>
          {!isLoading ? (
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={true}
              className='overflow-unset'
              loader={(
                <div>
                  <Badge bg="light" className='p-4 d-flex align-items-center' text="dark">
                    <Spinner
                      as="div"
                      className='me-3'
                      role="status"
                      aria-hidden="true"
                    />
                    <div style={{ letterSpacing: '8px', textDecoration: 'unset' }}>LOADING</div>
                  </Badge>
                </div>
              )}
            >
              <Row>
                {data?.map((item: TProductList, index: number) => (
                  <StoreItem key={index} {...item} />
                ))}
              </Row>
            </InfiniteScroll>
          ) : (
            <StoreFilterLoding />
          )}

        </Col>
      </Row>

    </Container>
  )
}

export default Store