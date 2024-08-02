import DetailsComponent from "@/app/_components/detailsPage/DetailsComponent";
import LoadingDetails from "@/app/_components/LoadingVersionPages/LoadingDetails";
import { Suspense } from 'react'


export default function Details( { params }: {
  params: { carID: string }
}) {
    return (
        <Suspense fallback={<LoadingDetails/>}>
          <DetailsComponent/>
        </Suspense>
    )
  }