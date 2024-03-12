"use client"
import { StoreModal } from "@/components/modals/store-modal";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModalStore((state)=>state.onOpen)
  const isOpen = useStoreModalStore((state)=>state.isOpen)
  
  useEffect(()=>{
    if (!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);
  return (
    <>
      <p>Admin Dashboard</p>
      Root page
      <Button variant="outline">Button</Button>
      
    </>
  );
}
