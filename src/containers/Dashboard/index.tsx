import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Skeleton, Typography } from 'antd';

import { selectContent, selectIsFetching } from '../../store/secret/selectors';
import { fetchContent } from '../../store/secret/actions';

const { Title, Paragraph } = Typography;

const Dashboard: React.FC = () => {
  const isFetching = useSelector(selectIsFetching);
  const content = useSelector(selectContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent('Dashboard secret content'));
  }, [dispatch]);

  return (
    <>
      <Title>Dashboard</Title>
      <Skeleton
        loading={isFetching}
        active
      >
        <Paragraph>
          {content}
        </Paragraph>
      </Skeleton>
    </>
  )
};

export default Dashboard;
