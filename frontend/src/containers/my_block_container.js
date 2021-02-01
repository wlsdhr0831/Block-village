import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import MyBlockCategory from '../components/my_page/my_block/my_block_category/my_block_category';
import * as BlockAction from '../modules/block';

const MyBlockContainer = () => {

    const userInfo = useSelector(state => state.user.userInfo);
    const myBlockList = useSelector(state => state.block.myBlocksInfo);
    const dispatch = useDispatch();

    // 처음에 렌더할 때 내 블록 불러오는 요청
    useEffect(() => {
        dispatch(BlockAction.getMyBlocks(userInfo.email));
    }, []);

    return (
    <>
        <MyBlockCategory
            myBlockList={myBlockList}
        /> 
    </>
    );
}

export default MyBlockContainer;