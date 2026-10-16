import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '城市',
      links: [
        {
          text: '福州',
          href: getPermalink('/cities/fuzhou'),
        },
        {
          text: '更多城市（筹备中）',
          href: getPermalink('/#map'),
        },
      ],
    },
    {
      text: '目的地',
      href: getPermalink('/destinations'),
    },
    {
      text: '点亮地图',
      href: getPermalink('/#map'),
    },
    {
      text: '求签',
      href: getPermalink('/fate'),
    },
    {
      text: '实务',
      href: getPermalink('/essentials'),
    },
    {
      text: '福大',
      href: getPermalink('/fzu'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '城市',
      links: [{ text: '福州', href: getPermalink('/cities/fuzhou') }],
    },
    {
      title: '校园',
      links: [{ text: '福州大学', href: getPermalink('/fzu') }],
    },
    {
      title: '玩法',
      links: [{ text: '点亮地图', href: getPermalink('/#map') }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    城市指南 · 自玩作品 · 数据仅供参考
  `,
};
