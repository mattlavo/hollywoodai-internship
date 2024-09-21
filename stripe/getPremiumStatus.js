import { auth, db } from "@/firebase";

import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

export const getSubscriptionStatus = async () => {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  try {
    const collectionRef = collection(
      db,
      "customers",
      user.uid,
      "subscriptions"
    );

    const querySnapshot = query(
      collectionRef,
      where("status", "in", ["trailing", "active"]),
      orderBy("created", "desc")
    );

    const userSubscriptions = await getDocs(querySnapshot);

    // In this example, we only expect one active or trialing subscription to exist.

    if (userSubscriptions.docs.length === 0) {
      console.log("No active or trialing subscriptions found");
      return null;
    } else {
      const latestSubscription = userSubscriptions.docs[0].data();

      if (latestSubscription.items && latestSubscription.items.length > 0) {
        const productInfo = latestSubscription.items[0].price.product.name;
        const planName = productInfo || null;

        if(planName) {
          console.log(`Subscription Plan Name: ${planName}`);
          return planName;
        }
      }

      console.log('Subscription found but no plan name available');
      return null;

      // const subscriptionName = latestSubscription.planName || null;

      // if(subscriptionName) {
      //   console.log(`Subscription found: ${subscriptionName}`);
      //   return subscriptionName;
      // } else {
      //   console.log('Subscription found but no plan name available');
      //   return null;
      // }

      // console.log("Active or trialing subscription found");
      // return true;
    }
  } catch (error) {
    if (error) {
      console.log(error);
      return null;
    }
  }
};