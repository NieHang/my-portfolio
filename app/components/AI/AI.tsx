import BorderButton from "@/components/common/BorderButton";

import clsx from "clsx";

export default function AI({ sectionId }: { sectionId: string }) {
  return (
    <section id={sectionId} className="mt-10 flex flex-col">
      <BorderButton>AI</BorderButton>
      <div className="mt-5 mb-10 flex items-center justify-center italic">
        "Here's my thoughts about AI. AI is a powerful tool that can assist us
        to achieve something wonderful. But what I wanna say is that it's a tool
        not a magic. I have used AI to help me create some projects, such as
        Polymarket-Liquidity and Virtual-Launch. They work well. But I also
        failed at a project called Polymarket-Bot, which tried to predict the
        price of BTC, ETH etc. The first version of the bot written by my hands
        earned more than 3k USD for me in less a month. But when I tried to use
        AI to optimize the code, it just didn't work. I was eager to use AI to
        give me some advices to improve the bot, especially it's strategies. But
        the result was disappointing. AI couldn't give you some proper
        strategies to work well in the increasingly competitive market. I gave
        it up. After this event, I realized that AI is just a tool not a magic.
        ",
      </div>
    </section>
  );
}
