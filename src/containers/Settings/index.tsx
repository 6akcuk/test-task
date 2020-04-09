import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Skeleton, Typography } from 'antd';

import { selectContent, selectIsFetching } from '../../store/secret/selectors';
import { fetchContent } from '../../store/secret/actions';

const { Title, Paragraph } = Typography;

const Settings: React.FC = () => {
  const isFetching = useSelector(selectIsFetching);
  const content = useSelector(selectContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent('Settings secret content'));
  }, [dispatch]);

  return (
    <>
      <Title>Settings</Title>
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

export default Settings;
