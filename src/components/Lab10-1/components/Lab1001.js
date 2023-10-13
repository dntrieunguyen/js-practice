import Button from './UI/Button/Button';
import DemoList from './Demo/DemoList';
import React, { useCallback, useState } from 'react';

export default function Lab1001() {
   const [title, setTitle] = useState('Change List Tilte');
   const items = [5, 2, 8, 1, 9];
   const onClickBtn = useCallback(() => {
      setTitle('Changed Title');
      console.log('Button RUNNING');
   }, []);
   return (
      <div className="absolute -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 w-[400px]">
         <Button onClickBtn={onClickBtn}>{title}</Button>
         <DemoList items={items}></DemoList>
      </div>
   );
}
