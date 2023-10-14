import React from 'react'
import { Form } from 'react-bootstrap'
import { useSpring, animated } from '@react-spring/web'


import { filtersType } from '../../../types/types';

type Props = {
    filtersData: filtersType[],
}
export const Filter = (props: any) => {
    // const { filtersData } = props;
    console.log(props);
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })

    const styles = useSpring({
        from: {
          opacity: 0,
          x: '6%',
        },
        to: {
          opacity: 1,
          x: 0,
        },
      })
    return (
        <div className='filter-Wrp p-2'>
            <animated.div
                style={{
                    ...styles
                }}
            >
            <h6>Brands</h6>
            <Form>
                {props.data?.map((item: filtersType) => (
                    <div key={`checkbox-${item.id}`} className="">
                        <Form.Check
                            type='checkbox'
                            id={`checkbox-${item.name + item.id}`}
                            label={`${item.name}`}
                        />

                    </div>
                ))}
            </Form>
            <hr />
            <h6>Brands</h6>
            <Form>
                {props.data?.map((item: filtersType) => (
                    <div key={`radio-${item.id}`} className="">
                        <Form.Check
                            type='checkbox'
                            name={`r-${item.name}`}
                            id={`radio-${item.name + item.id}`}
                            label={`r-${item.name}`}
                        />

                    </div>
                ))}
            </Form>
            </animated.div>
        </div>
    )
}
