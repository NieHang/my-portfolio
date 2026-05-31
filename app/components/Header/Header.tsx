import PersonalIcon from "@/assets/common/personal-icon.svg";
import clsx from "clsx";

export default function Header({
  navs,
}: {
  navs: { id: number; name: string }[];
}) {
  function triggerEmail() {
    const emailTo = "niehang77@gmail.com";
    const subject = encodeURIComponent("Hello from my site!");

    // Triggers the user's default mail client
    window.location.href = `mailto:${emailTo}?subject=${subject}`;
  }

  return (
    <section
      className={clsx(
        "sticky top-0",
        "flex items-center justify-between",
        "mb-10 bg-white py-5",
      )}
    >
      <div className="color-gray-950 dark:color-white flex items-center text-base">
        <img src={PersonalIcon} alt="Personal Icon" className="h-10 w-10" />
        <span>NH</span>
      </div>
      <div className="flex items-center gap-4">
        {navs.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className={clsx(
              "relative text-gray-950",
              "after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-1 after:w-full",
              "after:bg-amber-300 after:transition-all",
              "after:scale-x-0 after:duration-300 after:content-[''] hover:after:scale-x-100",
              "dark:text-white dark:after:bg-white",
            )}
          >
            {nav.name}
          </a>
        ))}
      </div>
      <div
        className="flex h-10 cursor-pointer items-center justify-center rounded-[20px] border border-gray-950 px-5 dark:border-white"
        onClick={triggerEmail}
      >
        Contact Me
      </div>
    </section>
  );
}
