import { IconLink } from '@/components/IconLink'
import { Button } from '@/components/Button'
import Image from 'next/image'

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="26"
      height="26"
      viewBox="0 0 192 192"
      {...props}
    >
      {
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,192v-192h192v192z" fill="none"></path>
          <g fill="#ffffff">
            <g id="surface1">
              <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
            </g>
          </g>
        </g>
      }
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <Image
        // grayscale config: on mobile, grayscale is retired on hover. On desktop, it's the opposite.
        className="cursor-messi rounded-sm grayscale hover:grayscale-0 lg:grayscale-0 lg:hover:grayscale"
        src="/me-world-cup.jpg"
        alt="Federico Montes photo"
        width={250}
        height={250}
      />
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Federico Montes <span className="text-sky-300">Software Engineer</span>
      </h1>
      <p className="my-4 text-sm/6 text-gray-300">
        A passionate and dedicated Software Engineer who wholeheartedly embraces
        his craft. Committed to implementing best practices and delivering
        top-notch quality in every aspect of his work.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://github.com/FedeMDO"
          icon={GitHubIcon}
          className="flex-none"
          target="_blank"
        >
          GitHub
        </IconLink>
        <Button
          type="submit"
          arrow
          href={
            'mailto:federicomdo97@gmail.com?subject=Hello there!&body=Hi Federico, I would like to get in touch with you!'
          }
        >
          Say Hello!
        </Button>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink
        href="https://www.linkedin.com/in/federico-montes-de-oca/"
        icon={LinkedinIcon}
        compact
        large
        target="_blank"
      >
        Fede Montes
      </IconLink>
    </p>
  )
}
