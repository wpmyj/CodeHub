﻿CREATE TABLE [dbo].[GsmMessage] (
    [Unique]   INT            NOT NULL,
    [Parent]   INT            NULL,
    [Mobile]   NVARCHAR (50)  NOT NULL,
    [Date]     DATETIME       NOT NULL,
    [Text]     NVARCHAR (MAX) NULL,
    [Remark]   NVARCHAR (MAX) NULL,
    [Status]   INT            NOT NULL,
    [State]    INT            NOT NULL,
    [Version]  INT            NOT NULL,
    [Operator] INT            NOT NULL,
    [Log]      NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_GsmMessage] PRIMARY KEY CLUSTERED ([Unique] ASC, [Version] ASC)
);


GO
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20141127-091628]
    ON [dbo].[GsmMessage]([Date] ASC);

