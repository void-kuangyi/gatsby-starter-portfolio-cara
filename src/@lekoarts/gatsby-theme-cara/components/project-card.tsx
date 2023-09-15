/** @jsx jsx */
import { jsx } from "theme-ui";
import { Badge } from "styled-badge-component";

type ProjectCardProps = {
  link: string;
  title: string;
  status: string;
  collab?: string;
  individual: boolean;
  children: React.ReactNode;
  bg: string;
  keywords: string[];
  textColor?: string;
  className?: string;
};

const ProjectCard = ({
  link,
  title,
  status,
  individual,
  collab,
  className,
  children,
  bg,
  keywords,
  textColor,
}: ProjectCardProps) => (
  <a
    href={link}
    rel="noreferrer noopener"
    className={className}
    sx={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`,
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: textColor || `white`,
      background: bg || `none`,
      backgroundSize: `cover`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: textColor || `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        margin: `-20px 0px 30px 0px`,
        display: `flex`,
        flexDirection: `column`,
        flexWrap: `wrap`,
        gap: `10px`,
        alignItems: `flex-start`,
      }}
    >
      {status === "Coming soon" ? (
        <Badge pill warning>
          {status}
        </Badge>
      ) : (
        <Badge pill secondary>
          {status}
        </Badge>
      )}
      {collab && (
        <Badge pill secondary>
          {collab}
        </Badge>
      )}
    </div>
    <div>
      {textColor == "black" ? (
        <div
          sx={{
            fontWeight: 600,
            fontSize: 1,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          sx={{
            textShadow: `1px 2px 7px rgba(0, 0, 0)`,
            fontWeight: 600,
            fontSize: 1,
          }}
        >
          {children}
        </div>
      )}
      <div
        sx={{
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
          fontFamily: "scandia-line-web-stencil, sans-serif",
          fontStyle: "normal",
        }}
      >
        {title}
      </div>
    </div>
    <div
      sx={{
        display: `flex`,
        alignItems: `flex-end`,
      }}
    >
      <div
        sx={{
          marginTop: `30px`,
          marginBottom: `-20px`,
          display: `flex`,
          flexWrap: `wrap`,
          gap: `10px`,
        }}
      >
        {keywords.map((keyword, index) => (
          <Badge pill light key={index}>
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
